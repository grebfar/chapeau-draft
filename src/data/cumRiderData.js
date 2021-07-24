import riderData from "./riderData";

let cumsum = 0;
const cumRiderData = riderData.map(({ id, name, form }) => ({
  id,
  name,
  cumform: (cumsum += form)
}));

export default cumRiderData;
