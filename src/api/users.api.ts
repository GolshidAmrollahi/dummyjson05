import type { IUser } from "../types/user.type"
import { generateClient } from "./client"
import { urls } from "./urls";

type fetchUsersListByIdsType = (_:Array<number>) => Promise<Array<IUser>>

export const fetchUsersListByIds : fetchUsersListByIdsType = async (ids) => {
  const client = generateClient();
  const responses = await Promise.all(
    ids.map((id) => {
      return client.get<IUser>(urls.users.byId(id));
    })
  );
  const data: IUser[] = [];
  for(const r of responses) {
    data.push(r.data);
  }
  return data;
}