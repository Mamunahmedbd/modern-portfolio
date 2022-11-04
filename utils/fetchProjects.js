export const fetchProject = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getProject`);
  const data = res.json();
  return data;
};
