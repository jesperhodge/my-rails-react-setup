class ApprovedUserGuard < Clearance::SignInGuard
  def call
    if not_approved?
      failure('You must be approved by a team administrator.')
    else
      success
    end
  end

  def not_approved?
    signed_in? && !current_user.approved_at
  end
end
