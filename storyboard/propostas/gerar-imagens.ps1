# Gera um PNG (3200x1800) para cada proposta-*.html desta pasta, usando o Edge em modo headless.
# Uso:  powershell -ExecutionPolicy Bypass -File gerar-imagens.ps1
$edge = "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
if (-not (Test-Path $edge)) { $edge = "C:\Program Files\Google\Chrome\Application\chrome.exe" }
Get-ChildItem -Path $PSScriptRoot -Filter "proposta-*.html" | ForEach-Object {
  $out = [IO.Path]::ChangeExtension($_.FullName, ".png")
  $uri = ([Uri]$_.FullName).AbsoluteUri
  Start-Process -FilePath $edge -ArgumentList "--headless=new","--disable-gpu","--hide-scrollbars","--force-device-scale-factor=2","--window-size=1600,900","--screenshot=`"$out`"","`"$uri`"" -Wait
  Write-Output "gerado: $([IO.Path]::GetFileName($out))"
}
