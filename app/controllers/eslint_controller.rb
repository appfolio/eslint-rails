class EslintController < ActionController::Base

  before_action :set_filename

  def show
    @warnings = ESLintRails::Runner.new(@filename).run
  end

  def source
    @source = Rails.application.assets[@filename].to_s
  end

  def config_file
    render json: ESLintRails::Config.read(force_default: params[:force_default])
  end

  private

  def set_filename
    @filename = params[:filename] || 'application'
  end
end
