import List "mo:core/List";
import LeadsLib "../lib/leads";
import Types "../types/leads";

mixin (leads : List.List<Types.Lead>) {
  public func submitLead(name : Text, phone : Text, requirement : Text) : async Bool {
    LeadsLib.submit(leads, name, phone, requirement);
  };

  public query func getLeads() : async [Types.Lead] {
    LeadsLib.list(leads);
  };
};
