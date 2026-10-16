import justifiedLayout from "./justified-layout.js";
import * as params from "@params";

const gallery = document.getElementById("gallery");

if (gallery) {
  let containerWidth = 0;
  const items = gallery.querySelectorAll(".gallery-item");

  const aspectRatios = Array.from(items).map((item) => {
    const img = item.querySelector("img");
    img.style.width = "100%";
    img.style.height = "auto";
    return parseFloat(img.getAttribute("width")) / parseFloat(img.getAttribute("height"));
  });

  function updateGallery() {
    if (containerWidth === gallery.getBoundingClientRect().width) return;
    containerWidth = gallery.getBoundingClientRect().width;

    // Theme bug: Number.isInteger rejects float tolerances like 0.2
    const heightTolerance =
      typeof params.targetRowHeightTolerance === "number" && !Number.isNaN(params.targetRowHeightTolerance)
        ? params.targetRowHeightTolerance
        : 0.25;

    const layout = justifiedLayout(aspectRatios, {
      rowWidth: containerWidth,
      spacing: Number.isInteger(params.boxSpacing) ? params.boxSpacing : 8,
      rowHeight: params.targetRowHeight || 288,
      heightTolerance,
    });

    items.forEach((item, i) => {
      const box = layout.boxes[i];
      // Floor sizes so left+width never spills past container (fixes rightmost clip)
      const left = Math.floor(box.left);
      const top = Math.floor(box.top);
      const width = Math.floor(box.width);
      const height = Math.floor(box.height);
      item.style.position = "absolute";
      item.style.width = width + "px";
      item.style.height = height + "px";
      item.style.top = top + "px";
      item.style.left = left + "px";
      item.style.overflow = "hidden";
    });

    gallery.style.position = "relative";
    gallery.style.height = Math.ceil(layout.containerHeight) + "px";
    gallery.style.visibility = "";
    // Critical: theme leaves inline overflow:hidden which clips the last thumb in a row
    gallery.style.overflow = "visible";
  }

  window.addEventListener("resize", updateGallery);
  window.addEventListener("orientationchange", updateGallery);

  // Call twice to adjust for scrollbars appearing after first call
  updateGallery();
  updateGallery();
}
