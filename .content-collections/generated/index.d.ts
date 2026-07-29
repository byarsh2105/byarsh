import configuration from '../../content-collections.ts';
import { GetTypeByName } from '@content-collections/core';

export type Journal = GetTypeByName<typeof configuration, 'journal'>;
export declare const allJournals: Array<Journal>;

export {};
