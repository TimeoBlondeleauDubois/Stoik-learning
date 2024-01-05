/**
 * @typedef {import("@prismicio/client").Content.InitSlice} InitSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<InitSlice>} InitProps
 * @param {InitProps}
 */
const Init = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for init (variation: {slice.variation}) Slices
    </section>
  );
};

export default Init;
