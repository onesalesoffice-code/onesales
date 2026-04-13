import List "mo:core/List";
import Types "types/leads";
import LeadsApi "mixins/leads-api";

actor {
  let leads = List.empty<Types.Lead>();
  include LeadsApi(leads);
};
