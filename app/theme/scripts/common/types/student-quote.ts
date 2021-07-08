import { QuoteFragmentFragment } from "./strapi-gql-student";

export interface StudentQuote extends QuoteFragmentFragment {
  positionClass?: string;
  bubbleClass?: string;
  mascotClass?: string;
}
