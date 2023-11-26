export async function GetActivityParams() {
  const params = [
    { name: 'activity_name', type: 'text/plain' },
    { name: 'topic', type: 'text/plain' },
    { name: 'description', type: 'text/plain' },
    { name: 'test_params', type: 'array[text/plain]' },
    { name: 'expected_results', type: 'array[text/plain]' },
  ]
  return params
}
