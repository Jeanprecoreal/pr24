/**
 * @typedef {import("@prismicio/client").Content.ListaSlice} ListaSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ListaSlice>} ListaProps
 * @param {ListaProps}
 */
const Lista = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for lista (variation: {slice.variation}) Slices
    </section>
  );
};

export default Lista;
