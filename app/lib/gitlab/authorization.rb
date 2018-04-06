module Gitlab
  class Authorization
    require 'securerandom'

    attr_reader :current_user

    def initialize(current_user)
      @current_user = current_user
    end

    def url
      "#{gitlab_url}/oauth/authorize?client_id=#{Rails.application.secrets.gitlab_app_id}" \
        "&redirect_uri=http://localhost:3000/users/auth/callback" \
        "&response_type=code&state=#{unique_key}"
    end

    def gitlab_url
      @gitlab_url = 'http://gitlab.com'
      @gitlab_url ||= @current_user.team.gitlab_url
    end

    def unique_key
      @unique_key ||= SecureRandom.hex
    end
  end
end
