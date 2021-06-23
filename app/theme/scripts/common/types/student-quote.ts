import { QuoteFragmentFragment } from "./strapi-gql-student";

export interface StudentQuote extends QuoteFragmentFragment {
  bubblePositionClass?: string;
  bubbleClass?: string;
  mascotClass?: string;
}
