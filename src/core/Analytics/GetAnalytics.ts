export async function GetAnalytics() {
  const quantAnalytics = [
    { name: 'attempts', type: 'integer' },
    { name: 'problem_accessed', type: 'integer' },
    { name: 'time_spent', type: 'integer' },
    { name: 'problem_solved', type: 'boolean' },
  ]

  const qualityAnalytics = [{ name: 'code', type: 'text/plain' }]

  const params = { quantAnalytics, qualityAnalytics }
  return params
}
