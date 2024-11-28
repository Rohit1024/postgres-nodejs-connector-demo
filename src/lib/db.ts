import { Connector, IpAddressTypes, AuthTypes } from "@google-cloud/cloud-sql-connector";
import pg from "pg";
const { Pool } = pg;

export const getIpType = () =>
  process.env.PRIVATE_IP === "1" || process.env.PRIVATE_IP === "true"
    ? IpAddressTypes.PRIVATE
    : IpAddressTypes.PUBLIC;

export const connectWithConnector = async () => {
  const connector = new Connector();
  const clientOpts = await connector.getOptions({
    instanceConnectionName: process.env.INSTANCE_CONNECTION_NAME,
    ipType: getIpType(),
    authType: AuthTypes.IAM
  });
  const pool = new Pool({
    ...clientOpts,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    max: 5,
  });
  return pool;
};

