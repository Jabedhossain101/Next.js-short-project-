import sqlite3 from 'sqlite3';
import { promisify } from 'util';
import path from 'path';

let db;

export async function getDb() {
  if (db) return db;

  // Create database connection
  db = new sqlite3.Database(path.join(process.cwd(), 'products.db'));

  // Promisify db methods
  db.run = promisify(db.run.bind(db));
  db.get = promisify(db.get.bind(db));
  db.all = promisify(db.all.bind(db));

  // Initialize tables
  await db.run(`
    CREATE TABLE IF NOT EXISTS products (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      description TEXT,
      price REAL NOT NULL,
      image TEXT
    )
  `);

  await db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL,
      name TEXT
    )
  `);

  return db;
}
