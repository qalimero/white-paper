import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

import styles from '../../scss/_a-links.module.scss';


/**
 * Props for `CtaSlice`.
 */
export type LinksSliceProps = SliceComponentProps<Content.CtaSliceSlice>;

/**
 * Component for "CtaSlice" Slices.
 */
const LinksSlice = ({ slice }: LinksSliceProps): JSX.Element => {
  return (
    <a className={styles.default}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for cta_slice (variation: {slice.variation}) Slices
    </a>
  );
};

export default LinksSlice;
