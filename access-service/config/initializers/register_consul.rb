Rails.application.config.after_initialize do
  require 'faraday'

  conn = Faraday.new(
    url: 'http://discovery:8500/',
    headers: { 'Content-Type' => 'application/json' }
  )

  body = {
    "Node": 'access-service-server',
    "Address": 'access-service',
    "NodeMeta": {
      "external-node": 'true',
      "external-probe": 'true'
    },
    "Service": {
      "ID": 'access-service',
      "Service": 'access-service',
      "Port": 3000
    },
    "Check": {
      "Node": 'access-service-server',
      "ServiceID": 'access-service',
      "Name": 'http-access-service-check',
      "Status": 'warning',
      "Definition": {
        "HTTP": 'http://access-service:3000/health',
        "Interval": '10s'
      }
    }
  }

  response = conn.put('/v1/catalog/register') do |req|
    req.body = body.to_json
  end

  if response.status == 200
    puts 'Successfully registered with Consul'
  else
    puts 'Failed to register with Consul'
  end
end
