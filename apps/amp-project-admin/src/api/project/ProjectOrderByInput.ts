import { SortOrder } from "../../util/SortOrder";

export type ProjectOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  owner?: SortOrder;
  startDate?: SortOrder;
  updatedAt?: SortOrder;
};
