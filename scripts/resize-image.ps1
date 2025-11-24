
Add-Type -AssemblyName System.Drawing

$sourcePath = $args[0]
$destPath = $args[1]

Write-Host "Processing $sourcePath to $destPath"

if (-not (Test-Path $sourcePath)) {
    Write-Error "Source file not found: $sourcePath"
    exit 1
}

try {
    $img = [System.Drawing.Image]::FromFile($sourcePath)
    $newImg = new-object System.Drawing.Bitmap(1200, 630)
    $graph = [System.Drawing.Graphics]::FromImage($newImg)
    
    # High quality resizing
    $graph.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $graph.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $graph.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $graph.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality

    $graph.DrawImage($img, 0, 0, 1200, 630)
    
    $codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq "image/jpeg" }
    $ep = New-Object System.Drawing.Imaging.EncoderParameters(1)
    $ep.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, [long]60)
    
    $newImg.Save($destPath, $codec, $ep)
    
    $img.Dispose()
    $newImg.Dispose()
    $graph.Dispose()
    
    Write-Host "Successfully saved to $destPath"
} catch {
    Write-Error "Error processing image: $_"
    exit 1
}
