import * as accessibleWeb from "./articles/accessible-web";
import * as contentFirst from "./articles/content-first";
import * as designPrinciles from "./articles/design-principles";
import * as futureWeb from "./articles/future-of-web";
import * as nonprofitSites from "./articles/nonprofit-sites";
import * as whatWeDontDo from "./articles/what-we-dont-do";
import * as performanceMatters from "./articles/performance-matters";



export const blogPosts = [
  {
    metadata: accessibleWeb.metadata,
    Component: accessibleWeb.default,
  },
  {
    metadata: contentFirst.metadata,
    Component: contentFirst.default,
  },
  {
    metadata: designPrinciles.metadata,
    Component: designPrinciles.default,
  },
  {
    metadata: futureWeb.metadata,
    Component: futureWeb.default,
  },
  {
    metadata: nonprofitSites.metadata,
    Component: nonprofitSites.default,
  },
  {
    metadata: whatWeDontDo.metadata,
    Component: whatWeDontDo.default,
  },
  {
    metadata: performanceMatters.metadata,
    Component: performanceMatters.default,
  }
];
