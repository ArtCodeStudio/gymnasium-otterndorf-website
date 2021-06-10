import { TextExpandOptions } from "../types";
import {
  MAX_EXPAND_TEXT_LENGTH,
  MAX_EXPAND_TEXT_LENGTH_OFFSET,
} from "../constants";

export const getTextExpandOptions = (text?: string) => {
  const options: TextExpandOptions = {
    cutAt: -1,
    expandable: false,
    expanded: false,
  };

  if (!text?.length) {
    return options;
  }

  if (text.length > MAX_EXPAND_TEXT_LENGTH + MAX_EXPAND_TEXT_LENGTH_OFFSET) {
    options.cutAt = MAX_EXPAND_TEXT_LENGTH;
    options.expandable = true;
  } else {
    options.cutAt = text.length;
    options.expandable = false;
  }
  return options;
};
