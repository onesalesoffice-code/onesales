import type { backendInterface } from "../backend";

export const mockBackend: backendInterface = {
  getLeads: async () => [
    {
      name: "Rahul Sharma",
      phone: "9876543210",
      requirement: "3 BHK apartment in Bangalore",
      timestamp: BigInt(1712880000000000000),
    },
    {
      name: "Priya Mehta",
      phone: "9123456789",
      requirement: "Home loan for 50 lakhs",
      timestamp: BigInt(1712966400000000000),
    },
  ],
  submitLead: async (_name: string, _phone: string, _requirement: string) =>
    true,
};
