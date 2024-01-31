/**
 * @typedef {import("@prismicio/client").Content.HeroLegalsSlice} HeroLegalsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroLegalsSlice>} HeroLegalsProps
 * @param {HeroLegalsProps}
 */
const HeroLegals = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for hero_legals (variation: {slice.variation})
      Slices
    </section>
  );
};

export default HeroLegals;
