const BASE_URL = "http://localhost:8085/projectwork";

export async function fetchDomains() {
  const res = await fetch(`${BASE_URL}/domains`);
  return res.json();
}

export async function fetchProjectsByDomain(domainId) {
  const res = await fetch(`${BASE_URL}/api/projects/domain/${domainId}`);
  return res.json();
}

export async function fetchProjectDetails(projectId) {
  const res = await fetch(`${BASE_URL}/api/projects/details/${projectId}`);
  return res.json();
}

export async function submitProject(projectId, userId, link) {
  const encodedLink = encodeURIComponent(link);
  const res = await fetch(`${BASE_URL}/api/projects/submit/${projectId}?userId=${userId}&submissionLink=${encodedLink}`, {
    method: "POST"
  });
  return res.text();
}
