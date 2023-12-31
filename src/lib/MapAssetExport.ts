import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export enum ImageType {
  PNG = 'png',
  JPEG = 'jpeg',
  JPG = 'jpg'
}

abstract class MapExport {
  element: HTMLElement | null
  constructor() {
    this.element = document.getElementById('divToPrint')
  }
  abstract export({ onComplete }: { onComplete: () => void }): Promise<void>
}


export class MapExportImage extends MapExport {
  imageType: ImageType
  constructor(imageType: ImageType) {
    super();
    this.imageType = imageType
  }
  async export({ onComplete }: { onComplete: () => void }): Promise<void> {
    setTimeout(() => {
      html2canvas(this.element!)
        .then((canvas) => {
          const imgData = canvas.toDataURL('image/jpeg');
          const link = document.createElement('a');
          link.href = imgData;
          link.download = `downloaded-image.${this.imageType}`;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          onComplete()
        })
    }, 1000)
  }
}

export class MapExportPDF extends MapExport {
  async export({ onComplete }: { onComplete: () => void }): Promise<void> {
    setTimeout(() => {
      html2canvas(this.element!)
        .then((canvas) => {
          const imgData = canvas.toDataURL('image/jpeg');
          // Create a PDF
          const pdf = new jsPDF({
            orientation: 'landscape',
          });
          const pdfWidth = pdf.internal.pageSize.getWidth();
          const pdfHeight = pdf.internal.pageSize.getHeight();

          const imgWidth = canvas.width;
          const imgHeight = canvas.height;

          // Calculate scaling factors for width and height
          const widthScale = pdfWidth / imgWidth;
          const heightScale = pdfHeight / imgHeight;

          const scale = Math.min(widthScale, heightScale) * 0.9;

          // Calculate new image dimensions to fit within the PDF
          const newImgWidth = imgWidth * scale;
          const newImgHeight = imgHeight * scale;

          const x = (pdfWidth - newImgWidth) / 1.1;
          const y = (pdfHeight - newImgHeight) / 2;
          pdf.addImage(imgData, 'JPEG', x, y, newImgWidth, newImgHeight);
          pdf.save(`download-pdf.pdf`);
          onComplete()
        })
    }, 1000)
  }
}
