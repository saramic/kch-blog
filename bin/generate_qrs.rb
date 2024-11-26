#!/usr/bin/env ruby

# frozen_string_literal: true

# install rqrcode if it is not available
unless system("gem list rqqrcode -i --silent")
  puts "Installing RQRCode ..."
  system("gem install rqrcode")
end
# install image_processing if it is not available
unless system("gem list image_processing -i --silent")
  puts "Installing ImageProcessing ..."
  system("gem install image_processing")
end

require "rqrcode"
require "image_processing/mini_magick"
require "fileutils"

ARGV.map do |arg|
  qr = RQRCode::QRCode.new(arg)
  FileUtils.mkdir_p "tmp"
  file_name = arg.gsub(/[^\w]+/, "_")
  qr.as_png(
    size: 400,
    bit_depth: 1,
    border_modules: 4,
    color_mode: ChunkyPNG::COLOR_GRAYSCALE,
    color: "black",
    file: "tmp/#{file_name}_qr.png",
    fill: :white
  )
  # qr_code_image = MiniMagick::Image.open("tmp/#{file_name}_qr.png")
  # logo_image = MiniMagick::Image.open("#{path_to_png}.png")
  # updated_logo_image = ImageProcessing::MiniMagick.source(logo_image)
  #   .resize_and_pad(105, 105, background: "white").call
  # composite_qr_code = qr_code_image.composite(updated_logo_image) do |c|
  #   c.compose "Over"
  #   c.gravity "center"
  #   c.colorspace "sRGB"
  # end
  # File.binwrite(
  #   "tmp/#{args[:name]}_logo_qr.png", 
  #   File.read(qr_code_image.path, encoding: 'BINARY'),
  # )
end
