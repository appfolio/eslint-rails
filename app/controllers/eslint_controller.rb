class EslintController < ActionController::Base

  before_filter :set_filename

  def show
    @warnings = ESLintRails::Runner.new(@filename).run
  end

  def source
    @source = Rails.application.assets[@filename].to_s
  end

  private

  def set_filename
    @filename = params[:filename] || 'application'
  end
end
