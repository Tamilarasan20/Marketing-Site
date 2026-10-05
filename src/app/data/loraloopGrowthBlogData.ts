import type { BlogPost } from './blogData';
import { loraloopAdsBatchA } from './loraloopAdsBatchA';
import { loraloopAdsBatchB } from './loraloopAdsBatchB';
import { loraloopWorkerBatchC } from './loraloopWorkerBatchC';
import { loraloopWorkerBatchD } from './loraloopWorkerBatchD';
import { loraloopCompareBatchE } from './loraloopCompareBatchE';

// 50 SEO/GEO posts (ids 122-171) for the two core audiences:
//  A+B  Meta advertisers (DTC brands, agencies, media buyers, creative strategists)
//  C+D  Businesses delegating marketing to an AI marketing worker
//  E    Tool comparisons, "best of" lists and buyer-intent guides
export const loraloopGrowthBlogPosts: BlogPost[] = [
  ...loraloopAdsBatchA,
  ...loraloopAdsBatchB,
  ...loraloopWorkerBatchC,
  ...loraloopWorkerBatchD,
  ...loraloopCompareBatchE,
];
