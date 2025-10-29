import { useEffect, useState, useRef, useCallback } from "react";
import { FileText, ExternalLink, Download, BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { underwritingGuidelines } from "@/data/underwritingGuidelines";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const UnderwritingGuidelines = () => {
  const [activeTocPage, setActiveTocPage] = useState(1);
  const [activeTocAnchor, setActiveTocAnchor] = useState<string | null>(
    "title-page"
  );
  const [visiblePage, setVisiblePage] = useState(1);
  const [numPages, setNumPages] = useState<number>(0);
  const [renderedPages, setRenderedPages] = useState<Set<number>>(
    new Set([1, 2, 3, 4, 5])
  );
  const [pageWidth, setPageWidth] = useState(() =>
    Math.min(Math.max(window.innerWidth - 400, 0), 900)
  );
  const tocRef = useRef<HTMLDivElement>(null);
  const pdfContainerRef = useRef<HTMLDivElement>(null);
  const pendingScrollRef = useRef<{ page: number; anchor?: string } | null>(
    null
  );
  const isNavigatingRef = useRef(false);
  const userClickedAnchorRef = useRef<string | null>(null);
  const ioRef = useRef<IntersectionObserver | null>(null);
  const pageHeightRef = useRef(1200);
  const renderedPagesCountRef = useRef(0);
  const pageRefsMap = useRef<Map<number, HTMLDivElement>>(new Map());
  const isInitialLoadRef = useRef(true);

  const pdfUrl = "/guidelines/underwriting-guidelines.pdf";

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const page = params.get("page");
    const anchor = params.get("anchor");

    if (anchor) {
      const section = underwritingGuidelines.find((s) => s.anchor === anchor);
      if (section) {
        isNavigatingRef.current = true;
        userClickedAnchorRef.current = anchor;
        setActiveTocPage(section.page);
        setActiveTocAnchor(anchor);
        setVisiblePage(section.page);
        pendingScrollRef.current = { page: section.page, anchor };

        setRenderedPages((prev) => {
          const newSet = new Set(prev);
          for (
            let i = Math.max(1, section.page - 2);
            i <= Math.min(195, section.page + 2);
            i++
          ) {
            newSet.add(i);
          }
          return newSet;
        });
      }
    } else if (page) {
      const pageNum = parseInt(page);
      isNavigatingRef.current = true;
      setActiveTocPage(pageNum);
      setVisiblePage(pageNum);
      const firstSectionOnPage = underwritingGuidelines.find(
        (s) => s.page === pageNum
      );
      setActiveTocAnchor(firstSectionOnPage?.anchor || null);
      userClickedAnchorRef.current = firstSectionOnPage?.anchor || null;
      pendingScrollRef.current = { page: pageNum };

      setRenderedPages((prev) => {
        const newSet = new Set(prev);
        for (
          let i = Math.max(1, pageNum - 2);
          i <= Math.min(195, pageNum + 2);
          i++
        ) {
          newSet.add(i);
        }
        return newSet;
      });
    } else {
      setTimeout(() => {
        isInitialLoadRef.current = false;
      }, 1000);
    }
  }, []);

  const goToPage = (page: number, anchor?: string) => {
    setActiveTocPage(page);
    setActiveTocAnchor(anchor || null);
    isNavigatingRef.current = true;
    userClickedAnchorRef.current = anchor || null;

    setRenderedPages((prev) => {
      const newSet = new Set(prev);
      for (
        let i = Math.max(1, page - 2);
        i <= Math.min(numPages || 195, page + 2);
        i++
      ) {
        newSet.add(i);
      }
      return newSet;
    });

    if (anchor) {
      window.history.pushState({}, "", `?anchor=${anchor}`);
    } else {
      window.history.pushState({}, "", `?page=${page}`);
    }

    requestAnimationFrame(() => {
      const pageElement = pageRefsMap.current.get(page);
      if (pageElement && pdfContainerRef.current) {
        pageElement.scrollIntoView({
          behavior: "auto",
          block: "start",
        });
      }
    });

    setTimeout(() => {
      isNavigatingRef.current = false;
    }, 500);
  };

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  const handlePageRenderSuccess = useCallback(
    (page: { height: number }, pageNum: number) => {
      pageHeightRef.current = page.height;
      renderedPagesCountRef.current += 1;

      if (pendingScrollRef.current?.page === pageNum) {
        setTimeout(() => {
          const pageElement = pageRefsMap.current.get(pageNum);
          if (pageElement && pdfContainerRef.current) {
            pageElement.scrollIntoView({ behavior: "auto", block: "start" });
          }

          const { anchor } = pendingScrollRef.current!;
          if (anchor && tocRef.current) {
            const activeButton = tocRef.current.querySelector(
              `[data-anchor="${anchor}"]`
            );
            if (activeButton) {
              activeButton.scrollIntoView({
                behavior: "auto",
                block: "center",
              });
            }
          }

          pendingScrollRef.current = null;

          setTimeout(() => {
            isNavigatingRef.current = false;
            isInitialLoadRef.current = false;
          }, 500);
        }, 100);
      }
    },
    []
  );

  const handlePageVisible = useCallback(
    (pageNumber: number) => {
      setVisiblePage(pageNumber);
      setActiveTocPage(pageNumber);

      setRenderedPages((prev) => {
        const newSet = new Set(prev);
        for (
          let i = Math.max(1, pageNumber - 2);
          i <= Math.min(numPages || 195, pageNumber + 2);
          i++
        ) {
          newSet.add(i);
        }
        return newSet;
      });

      if (
        !isInitialLoadRef.current &&
        !isNavigatingRef.current &&
        userClickedAnchorRef.current
      ) {
        const clickedSection = underwritingGuidelines.find(
          (s) => s.anchor === userClickedAnchorRef.current
        );

        if (!clickedSection || clickedSection.page !== pageNumber) {
          userClickedAnchorRef.current = null;
          setActiveTocAnchor(null);
        }
      }
    },
    [numPages]
  );

  useEffect(() => {
    if (!numPages || !pdfContainerRef.current) return;

    if (ioRef.current) {
      ioRef.current.disconnect();
    }

    ioRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const pageNum = parseInt(
            entry.target.getAttribute("data-page-number") || "1"
          );

          if (entry.isIntersecting) {
            setRenderedPages((prev) => {
              const newSet = new Set(prev);
              for (
                let i = Math.max(1, pageNum - 2);
                i <= Math.min(numPages, pageNum + 2);
                i++
              ) {
                newSet.add(i);
              }
              return newSet;
            });

            if (entry.intersectionRatio > 0.5) {
              handlePageVisible(pageNum);
            }
          }
        });
      },
      {
        threshold: [0, 0.5],
        root: pdfContainerRef.current,
        rootMargin: "500px",
      }
    );

    pageRefsMap.current.forEach((element) => {
      if (ioRef.current && element) {
        ioRef.current.observe(element);
      }
    });

    return () => {
      if (ioRef.current) {
        ioRef.current.disconnect();
        ioRef.current = null;
      }
    };
  }, [numPages, handlePageVisible]);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const newWidth = Math.min(Math.max(window.innerWidth - 400, 0), 900);
        setPageWidth(newWidth);
      }, 150);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="mb-12 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <BookOpen className="h-10 w-10 text-primary" />
            <h1 className="text-5xl font-bold tracking-tight">
              NQM Underwriting Guidelines
            </h1>
          </div>
          <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
            <Badge variant="outline" className="gap-1">
              <FileText className="h-3 w-3" />
              Effective 10/06/2025
            </Badge>
            <span>•</span>
            <span>{numPages || 195} Pages</span>
            <span>•</span>
            <div className="flex gap-2">
              <button
                onClick={() => window.open(pdfUrl, "_blank")}
                className="text-primary hover:underline flex items-center gap-1"
              >
                <ExternalLink className="h-3 w-3" />
                Open in New Tab
              </button>
              <span>•</span>
              <a
                href={pdfUrl}
                download
                className="text-primary hover:underline flex items-center gap-1"
              >
                <Download className="h-3 w-3" />
                Download PDF
              </a>
            </div>
          </div>
        </div>

        <div className="border rounded-lg overflow-hidden shadow-lg bg-card">
          <div className="flex h-[calc(100vh-100px)]">
            <div className="w-80 border-r bg-muted/30">
              <div className="bg-muted/50 border-b px-4 py-3">
                <h2 className="text-lg font-bold">Table of Contents</h2>
              </div>
              <div
                ref={tocRef}
                className="overflow-y-auto h-[calc(100%-53px)] p-4"
              >
                <div className="space-y-1 text-sm">
                  {underwritingGuidelines.map((section) => (
                    <button
                      key={section.anchor}
                      data-anchor={section.anchor}
                      onClick={() => goToPage(section.page, section.anchor)}
                      className={`w-full text-left px-3 py-2 rounded transition-colors ${
                        activeTocAnchor === section.anchor
                          ? "bg-primary/10 text-primary font-semibold"
                          : "text-blue-600 hover:text-blue-800 hover:bg-gray-50"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="flex-1">{section.title}</span>
                      </div>
                      <div className="text-xs text-muted-foreground mt-0.5">
                        Page {section.page}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex-1 flex flex-col">
              <div className="bg-muted/50 border-b px-4 py-3 flex items-center justify-between">
                <span className="text-sm font-medium flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  Page {visiblePage} of {numPages || 195}
                </span>
              </div>

              <div
                ref={pdfContainerRef}
                className="flex-1 overflow-auto bg-gray-100"
              >
                <div className="flex flex-col items-center py-4">
                  <Document
                    file={pdfUrl}
                    onLoadSuccess={onDocumentLoadSuccess}
                    loading={
                      <div className="flex items-center justify-center h-full">
                        <p className="text-muted-foreground">Loading PDF...</p>
                      </div>
                    }
                    error={
                      <div className="flex items-center justify-center h-full p-8 text-center">
                        <div>
                          <p className="text-red-600 mb-2">
                            Failed to load PDF
                          </p>
                          <a
                            href={pdfUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary underline"
                          >
                            Open PDF directly
                          </a>
                        </div>
                      </div>
                    }
                  >
                    {Array.from(new Array(numPages), (_, index) => {
                      const pageNum = index + 1;
                      const shouldRender = renderedPages.has(pageNum);

                      return (
                        <div
                          key={`page_${pageNum}`}
                          ref={(el) => {
                            if (el) {
                              pageRefsMap.current.set(pageNum, el);
                              if (ioRef.current) {
                                ioRef.current.observe(el);
                              }
                            } else {
                              const existingEl =
                                pageRefsMap.current.get(pageNum);
                              if (existingEl && ioRef.current) {
                                ioRef.current.unobserve(existingEl);
                              }
                              pageRefsMap.current.delete(pageNum);
                            }
                          }}
                          data-page-number={pageNum}
                          className="mb-4"
                          style={{
                            minHeight: shouldRender
                              ? "auto"
                              : `${pageHeightRef.current}px`,
                          }}
                        >
                          {shouldRender ? (
                            <Page
                              pageNumber={pageNum}
                              renderTextLayer={false}
                              renderAnnotationLayer={false}
                              width={pageWidth}
                              onRenderSuccess={(page) => {
                                handlePageRenderSuccess(page, pageNum);
                              }}
                            />
                          ) : (
                            <div
                              className="bg-gray-200 flex items-center justify-center text-gray-400"
                              style={{
                                width: pageWidth,
                                height: pageHeightRef.current,
                              }}
                            >
                              Page {pageNum}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </Document>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnderwritingGuidelines;
