import { connectWithConnector, getIpType } from "./lib/db.js";

export async function getUsers() {
  const pool = await connectWithConnector();
  const { rows } = await pool.query("SELECT * FROM users");
  console.table(rows);
  return rows;
}

export async function getTime() {
  const pool = await connectWithConnector();
  const {rows} = await pool.query('SELECT NOW()');
  console.table(rows);
  return rows;
}

export function useWhichIp() {
  const ip_type = getIpType()
  return ip_type;
}