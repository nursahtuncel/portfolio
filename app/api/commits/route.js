
const username = "nursahtuncel";
const token = process.env.GH_TOKEN; // opsiyonel



export async function GET() {
  try {
    // Kullanıcının tüm public repolarını al
    const reposRes = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=100`,
      {
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      }
    );
    const repos = await reposRes.json();

    let totalCommits = 0;

    for (const repo of repos) {
      // Sadece default branch
      const branch = repo.default_branch;

      const commitsRes = await fetch(
        `https://api.github.com/repos/${username}/${repo.name}/commits?sha=${branch}&per_page=1`,
        { headers: token ? { Authorization: `Bearer ${token}` } : {} }
      );

      const link = commitsRes.headers.get("link");
      if (link) {
        const match = link.match(/&page=(\d+)>; rel="last"/);
        if (match) {
          totalCommits += parseInt(match[1], 10);
        }
      } else {
        const commits = await commitsRes.json();
        totalCommits += commits.length;
      }
    }

    return new Response(JSON.stringify({ totalCommits }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ totalCommits: 0, error: error.message }), { status: 500 });
  }
}
