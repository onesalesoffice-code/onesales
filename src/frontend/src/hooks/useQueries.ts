import { createActor } from "@/backend";
import type { LeadFormData } from "@/types";
import { useActor as useCoreActor } from "@caffeineai/core-infrastructure";
import { useMutation, useQuery } from "@tanstack/react-query";

function useActor() {
  return useCoreActor(createActor);
}

export function useSubmitLead() {
  const { actor } = useActor();

  return useMutation({
    mutationFn: async (lead: LeadFormData) => {
      if (!actor) throw new Error("Actor not ready");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return (actor as any).submitLead(lead.name, lead.phone, lead.requirement);
    },
  });
}

export function useGetLeads() {
  const { actor, isFetching } = useActor();

  return useQuery<unknown[]>({
    queryKey: ["leads"],
    queryFn: async () => {
      if (!actor) return [];
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return (actor as any).getLeads();
    },
    enabled: !!actor && !isFetching,
  });
}
