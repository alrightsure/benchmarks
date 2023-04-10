import { mysqlTable, serial, varchar } from "drizzle-orm/mysql-core";

export const records = mysqlTable("records", {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 255 })
});
