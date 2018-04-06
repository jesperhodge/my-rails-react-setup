class SessionsController < Clearance::SessionsController
  def create
    sign_in(user) do |status|
      return render json: user if status.success?
      render json: { errors: status.failure_message }
    end
  end

  def user
    @user ||= authenticate(params)
  end

  def destroy
    sign_out
    render json: { success: true }
  end
end
