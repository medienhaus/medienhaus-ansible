export default () => ({
  matrix: {
    homeserver_base_url: 'https://{{ synapse_server_name_content }}',
    user_id: '@{{ medienhaus_backend_rundgang_user_id }}:{{ synapse_server_name_content }}',
    access_token: '{{ json_response_login_rundgang.json.access_token }}',
    root_context_space_id: '!{{ rundgang_frontend_root_context_space }}:{{ synapse_server_name_content }}'
  }
})
