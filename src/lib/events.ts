export const getData = async () => {
  const currentURL = new URL(window.location.href);
  const page = currentURL.searchParams.get('page') || '1';
  const keyword = currentURL.searchParams.get('q') || '';
  const request = await fetch(`/api/events?q=${keyword}&page=${page}`);
  if (request.ok) {
    const response = await request.json();
    console.log(response);
    return response;
  }
}

export const getSingleData = async () => {
  const url = new URL(window.location.href);
  const id = url.pathname.split("/").pop();
  const request = await fetch(`/api/events/single?id=${id}`);
  if (request.ok) {
    const response = await request.json();
    console.log(response);
    return response;
  }
}