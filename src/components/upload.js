// File Upload component for JasminCSS

export function generateUploadStyles(config) {
  return `/* Upload Zone Base */
.upload-zone {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  min-height: 12rem;
  border: 2px dashed var(--j-border);
  border-radius: var(--j-radius-lg, 0.5rem);
  background-color: var(--j-bg-subtle);
  cursor: pointer;
  transition: all 200ms ease-in-out;
}

.upload-zone:hover {
  border-color: var(--j-primary);
  background-color: color-mix(in srgb, var(--j-primary) 5%, transparent);
}

.upload-zone:focus-within {
  border-color: var(--j-primary);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--j-primary) 20%, transparent);
}

/* Drag Active State */
.upload-zone.drag-active,
.upload-zone.dragover {
  border-color: var(--j-primary);
  background-color: color-mix(in srgb, var(--j-primary) 10%, transparent);
  border-style: solid;
}

/* Upload Icon */
.upload-icon {
  width: 3rem;
  height: 3rem;
  margin-bottom: 1rem;
  color: var(--j-text-muted);
  transition: color 200ms ease-in-out;
}

.upload-zone:hover .upload-icon,
.upload-zone.drag-active .upload-icon {
  color: var(--j-primary);
}

/* Default cloud upload icon */
.upload-icon::before {
  content: "☁";
  font-size: 3rem;
  line-height: 1;
}

.upload-icon:has(svg)::before {
  display: none;
}

/* Upload Text */
.upload-text {
  text-align: center;
}

.upload-title {
  margin: 0 0 0.25rem;
  font-size: 1rem;
  font-weight: 500;
  color: var(--j-text);
}

.upload-title-link {
  color: var(--j-primary);
  text-decoration: underline;
  cursor: pointer;
}

.upload-description {
  margin: 0;
  font-size: 0.875rem;
  color: var(--j-text-muted);
}

/* Hidden Input */
.upload-input {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

/* Upload Sizes */
.upload-zone-sm {
  padding: 1.5rem;
  min-height: 8rem;
}

.upload-zone-sm .upload-icon {
  width: 2rem;
  height: 2rem;
  margin-bottom: 0.75rem;
}

.upload-zone-sm .upload-icon::before {
  font-size: 2rem;
}

.upload-zone-lg {
  padding: 3rem;
  min-height: 16rem;
}

.upload-zone-lg .upload-icon {
  width: 4rem;
  height: 4rem;
}

.upload-zone-lg .upload-icon::before {
  font-size: 4rem;
}

/* Upload Compact (inline) */
.upload-compact {
  flex-direction: row;
  padding: 1rem;
  min-height: auto;
  gap: 1rem;
}

.upload-compact .upload-icon {
  width: 2rem;
  height: 2rem;
  margin-bottom: 0;
}

.upload-compact .upload-text {
  text-align: left;
}

/* Upload Colors */
.upload-zone-primary {
  border-color: var(--j-primary);
  background-color: color-mix(in srgb, var(--j-primary) 5%, transparent);
}

.upload-zone-success {
  border-color: var(--j-success);
}

.upload-zone-success:hover {
  border-color: var(--j-success);
  background-color: color-mix(in srgb, var(--j-success) 10%, transparent);
}

/* Upload Error State */
.upload-zone-error {
  border-color: var(--j-error);
  background-color: color-mix(in srgb, var(--j-error) 5%, transparent);
}

.upload-zone-error .upload-icon {
  color: var(--j-error);
}

/* Upload Disabled */
.upload-zone-disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}

/* File List */
.upload-file-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1rem;
  width: 100%;
}

.upload-file-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  background-color: var(--j-bg);
  border: 1px solid var(--j-border);
  border-radius: var(--j-radius-default, 0.375rem);
}

.upload-file-icon {
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--j-bg-subtle);
  border-radius: var(--j-radius-default, 0.375rem);
  color: var(--j-text-muted);
  flex-shrink: 0;
}

.upload-file-info {
  flex: 1;
  min-width: 0;
}

.upload-file-name {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--j-text);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.upload-file-size {
  font-size: 0.75rem;
  color: var(--j-text-muted);
}

.upload-file-remove {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  padding: 0;
  background: transparent;
  border: none;
  border-radius: 50%;
  color: var(--j-text-muted);
  cursor: pointer;
  transition: all 150ms ease-in-out;
}

.upload-file-remove:hover {
  background-color: var(--j-bg-muted);
  color: var(--j-error);
}

.upload-file-remove::before {
  content: "×";
  font-size: 1.25rem;
  line-height: 1;
}

/* File Item States */
.upload-file-item-uploading {
  position: relative;
  overflow: hidden;
}

.upload-file-item-uploading::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3px;
  background-color: var(--j-primary);
  animation: upload-progress 2s ease-in-out infinite;
}

@keyframes upload-progress {
  0% { width: 0; }
  50% { width: 70%; }
  100% { width: 100%; }
}

.upload-file-item-success {
  border-color: var(--j-success);
}

.upload-file-item-success .upload-file-icon {
  background-color: color-mix(in srgb, var(--j-success) 15%, transparent);
  color: var(--j-success);
}

.upload-file-item-error {
  border-color: var(--j-error);
  background-color: color-mix(in srgb, var(--j-error) 5%, transparent);
}

.upload-file-item-error .upload-file-icon {
  background-color: color-mix(in srgb, var(--j-error) 15%, transparent);
  color: var(--j-error);
}

/* Upload Progress */
.upload-progress {
  width: 100%;
  margin-top: 0.5rem;
}

.upload-progress-bar {
  height: 0.25rem;
  background-color: var(--j-bg-muted);
  border-radius: var(--j-radius-full, 9999px);
  overflow: hidden;
}

.upload-progress-fill {
  height: 100%;
  background-color: var(--j-primary);
  border-radius: var(--j-radius-full, 9999px);
  transition: width 200ms ease-in-out;
}

.upload-progress-text {
  display: flex;
  justify-content: space-between;
  margin-top: 0.25rem;
  font-size: 0.75rem;
  color: var(--j-text-muted);
}

/* Image Preview */
.upload-preview {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 0.75rem;
  margin-top: 1rem;
}

.upload-preview-item {
  position: relative;
  aspect-ratio: 1;
  border-radius: var(--j-radius-default, 0.375rem);
  overflow: hidden;
  border: 1px solid var(--j-border);
}

.upload-preview-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.upload-preview-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: opacity 200ms ease-in-out;
}

.upload-preview-item:hover .upload-preview-overlay {
  opacity: 1;
}

.upload-preview-remove {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  background-color: white;
  border: none;
  border-radius: 50%;
  color: var(--j-error);
  cursor: pointer;
  transition: transform 150ms ease-in-out;
}

.upload-preview-remove:hover {
  transform: scale(1.1);
}

/* Avatar Upload */
.upload-avatar {
  position: relative;
  display: inline-block;
}

.upload-avatar-preview {
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid var(--j-border);
}

.upload-avatar-button {
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  background-color: var(--j-primary);
  border: 2px solid var(--j-bg);
  border-radius: 50%;
  color: white;
  cursor: pointer;
  transition: background-color 150ms ease-in-out;
}

.upload-avatar-button:hover {
  background-color: color-mix(in srgb, var(--j-primary) 85%, black);
}

/* Dark Variant */
.upload-zone-dark {
  background-color: var(--j-bg-dark, #1f2937);
  border-color: var(--j-border-dark, #374151);
  color: white;
}

.upload-zone-dark .upload-title {
  color: white;
}

.upload-zone-dark .upload-description {
  color: rgba(255, 255, 255, 0.6);
}

.upload-zone-dark:hover {
  background-color: rgba(255, 255, 255, 0.05);
}

/* Glass Variant */
.upload-zone-glass {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-color: rgba(255, 255, 255, 0.2);
}

.upload-zone-glass:hover {
  background: rgba(255, 255, 255, 0.15);
  border-color: rgba(255, 255, 255, 0.3);
}

/* Button Style Upload */
.upload-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: var(--j-primary);
  color: white;
  border: none;
  border-radius: var(--j-radius-default, 0.375rem);
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 150ms ease-in-out;
}

.upload-button:hover {
  background-color: color-mix(in srgb, var(--j-primary) 85%, black);
}

.upload-button-icon {
  width: 1rem;
  height: 1rem;
}

/* Constraints Display */
.upload-constraints {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;
  font-size: 0.75rem;
  color: var(--j-text-muted);
}

.upload-constraint {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.125rem 0.5rem;
  background-color: var(--j-bg-subtle);
  border-radius: var(--j-radius-full, 9999px);
}
`;
}
