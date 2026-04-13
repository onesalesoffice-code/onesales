import List "mo:core/List";
import Time "mo:core/Time";
import Types "../types/leads";

module {
  public type Lead = Types.Lead;

  public func submit(
    leads : List.List<Lead>,
    name : Text,
    phone : Text,
    requirement : Text,
  ) : Bool {
    leads.add({
      name;
      phone;
      requirement;
      timestamp = Time.now();
    });
    true;
  };

  public func list(leads : List.List<Lead>) : [Lead] {
    leads.toArray();
  };
};
