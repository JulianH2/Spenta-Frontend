// ticket-scanner.component.ts - Versión mejorada

import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';

export type ScanStatus = 'idle' | 'scanning' | 'success' | 'error';

@Component({
  selector: 'app-ticket-scanner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ticket-scanner.component.html',
  styleUrls: ['./ticket-scanner.component.scss']
})
export class TicketScannerComponent implements OnInit, OnDestroy {
  
  isFlashOn = false;
  isProcessing = false;
  scanStatus: ScanStatus = 'idle';
  
  private scanningInterval?: number;

  constructor(private location: Location) {}

  ngOnInit(): void {
    // Simular estado de escaneo automático
    this.startAutoScan();
  }

  ngOnDestroy(): void {
    this.stopAutoScan();
  }

  @HostListener('document:keydown.escape', ['$event'])
  onEscapeKey(event: KeyboardEvent): void {
    this.closeScanner();
  }

  closeScanner(): void {
    this.stopAutoScan();
    this.location.back();
  }

  toggleFlash(): void {
    this.isFlashOn = !this.isFlashOn;
    // Aquí implementarías la lógica real del flash
    console.log('Flash toggled:', this.isFlashOn);
  }

  captureImage(): void {
    if (this.isProcessing) return;
    
    this.isProcessing = true;
    this.scanStatus = 'scanning';
    
    // Simular procesamiento de imagen
    setTimeout(() => {
      // Simular resultado aleatorio
      const success = Math.random() > 0.3;
      this.scanStatus = success ? 'success' : 'error';
      this.isProcessing = false;
      
      // Resetear estado después de mostrar resultado
      setTimeout(() => {
        if (this.scanStatus === 'success') {
          // Aquí procesarías el ticket escaneado exitosamente
          this.handleSuccessfulScan();
        } else {
          this.scanStatus = 'idle';
        }
      }, 2000);
    }, 2000);
  }

  openGallery(): void {
    // Implementar apertura de galería
    console.log('Opening gallery...');
  }

  getStatusIcon(): string {
    switch (this.scanStatus) {
      case 'scanning':
        return 'bi-hourglass-split';
      case 'success':
        return 'bi-check-circle-fill';
      case 'error':
        return 'bi-exclamation-triangle-fill';
      default:
        return 'bi-qr-code-scan';
    }
  }

  getStatusText(): string {
    switch (this.scanStatus) {
      case 'scanning':
        return 'Escaneando...';
      case 'success':
        return '¡Ticket detectado!';
      case 'error':
        return 'No se pudo leer el código';
      default:
        return 'Busca un código QR';
    }
  }

  private startAutoScan(): void {
    // Simular escaneo automático cada 3 segundos
    this.scanningInterval = window.setInterval(() => {
      if (this.scanStatus === 'idle' && !this.isProcessing) {
        // Simular detección automática ocasional
        if (Math.random() > 0.8) {
          this.captureImage();
        }
      }
    }, 3000);
  }

  private stopAutoScan(): void {
    if (this.scanningInterval) {
      clearInterval(this.scanningInterval);
      this.scanningInterval = undefined;
    }
  }

  private handleSuccessfulScan(): void {
    // Aquí implementarías la lógica para procesar el ticket escaneado
    console.log('Ticket scanned successfully!');
    
    // Por ejemplo, redirigir a la página de detalles del ticket
    // this.router.navigate(['/ticket-details']);
    
    // O cerrar el escáner después de un tiempo
    setTimeout(() => {
      this.closeScanner();
    }, 1000);
  }
}