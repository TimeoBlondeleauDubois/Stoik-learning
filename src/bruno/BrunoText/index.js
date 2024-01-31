/**
 * @typedef {import("@prismicio/client").Content.BrunoTextSlice} BrunoTextSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<BrunoTextSlice>} BrunoTextProps
 * @param {BrunoTextProps}
 */
const BrunoText = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for bruno_text (variation: {slice.variation}) Slices
    </section>
  );
};

export default BrunoText;
