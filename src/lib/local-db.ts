import { LoanDetails } from "../../lib/types";

const BASE = "http://localhost:3001";

export interface LocalLoanRecord {
  id: string;
  createdAt: string;
}

export interface SaveLoanPayload {
  loanDetails: LoanDetails;
  profileName: string;
  programName: string;
  requiredSteps: string[];
}

export async function saveLoanDetailsToLocal(
  payload: SaveLoanPayload
): Promise<LocalLoanRecord> {
  const { loanDetails, profileName, programName, requiredSteps } = payload;
  const id = Math.random().toString(36).substring(2, 15);
  const res = await fetch(`${BASE}/loans`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      id,
      createdAt: new Date().toISOString(),
      loanDetails,
      profileName,
      programName,
      requiredSteps,
    }),
  });
  if (!res.ok) throw new Error(`json-server save failed: ${res.status}`);
  return res.json();
}

export async function getLoansFromLocal(): Promise<LocalLoanRecord[]> {
  const res = await fetch(`${BASE}/loans?_sort=createdAt&_order=desc`);
  if (!res.ok) throw new Error(`json-server list failed: ${res.status}`);
  return res.json();
}

// delete loan by id
export async function deleteLoanByIdFromLocal(id: string): Promise<void> {
  const res = await fetch(`${BASE}/loans/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error(`json-server delete failed: ${res.status}`);
}

export interface LocalLoanFullRecord extends LocalLoanRecord {
  loanDetails: LoanDetails;
  profileName: string;
  programName: string;
  requiredSteps: string[];
}

export async function getLoanByIdFromLocal(id: string): Promise<LocalLoanFullRecord> {
  const res = await fetch(`${BASE}/loans/${id}`);
  if (!res.ok) throw new Error(`json-server get by id failed: ${res.status}`);
  return res.json();
}
