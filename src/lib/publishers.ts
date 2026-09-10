/**
 * Reads publisher metadata for the storefront.
 * These helpers expose the minimal publisher summaries used by Astro pages
 * and components when listing or filtering games.
 */

import { asc } from 'drizzle-orm';
import { publishers } from '../../db/schema';
import type { Publisher } from '../types/game';
import type { Database } from './db';

/**
 * Retrieves all publishers in alphabetical order by name.
 *
 * @param db - The database connection used to query publisher records.
 * @returns A promise that resolves to publisher summary objects sorted by name.
exit */
export async function getAllPublishers(db: Database): Promise<Publisher[]> {
    return db
        .select({
            id: publishers.id,
            name: publishers.name,
        })
        .from(publishers)
        .orderBy(asc(publishers.name));
}
