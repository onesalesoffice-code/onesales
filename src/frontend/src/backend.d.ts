import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Lead {
    name: string;
    requirement: string;
    timestamp: bigint;
    phone: string;
}
export interface backendInterface {
    getLeads(): Promise<Array<Lead>>;
    submitLead(name: string, phone: string, requirement: string): Promise<boolean>;
}
