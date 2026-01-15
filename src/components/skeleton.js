export function generateSkeletonStyles(config) {
  return `/* Skeleton Base */
.skeleton {
  position: relative;
  overflow: hidden;
  background-color: var(--j-bg-muted);
  border-radius: var(--j-radius-default, 0.5rem);
}

.skeleton::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transform: translateX(-100%);
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.4),
    transparent
  );
  animation: skeleton-shimmer 1.5s infinite;
}

@keyframes skeleton-shimmer {
  100% {
    transform: translateX(100%);
  }
}

/* Dark Mode Skeleton */
.dark .skeleton::after,
.skeleton-dark::after {
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.1),
    transparent
  );
}

/* Skeleton Shapes */
.skeleton-text {
  height: 1rem;
  width: 100%;
  border-radius: var(--j-radius-sm, 0.25rem);
}

.skeleton-title {
  height: 1.5rem;
  width: 60%;
  border-radius: var(--j-radius-sm, 0.25rem);
}

.skeleton-circle {
  border-radius: 50%;
}

.skeleton-rounded {
  border-radius: var(--j-radius-lg, 0.75rem);
}

.skeleton-square {
  border-radius: 0;
}

/* Skeleton Sizes */
.skeleton-xs {
  height: 0.5rem;
}

.skeleton-sm {
  height: 0.75rem;
}

.skeleton-md {
  height: 1rem;
}

.skeleton-lg {
  height: 1.5rem;
}

.skeleton-xl {
  height: 2rem;
}

/* No Animation */
.skeleton-static::after {
  animation: none;
  display: none;
}

/* Pulse Animation (Alternative) */
.skeleton-pulse {
  animation: skeleton-pulse 1.5s ease-in-out infinite;
}

.skeleton-pulse::after {
  display: none;
}

@keyframes skeleton-pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
}

/* Skeleton Avatar */
.skeleton-avatar {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  flex-shrink: 0;
}

.skeleton-avatar-xs {
  width: 1.5rem;
  height: 1.5rem;
}

.skeleton-avatar-sm {
  width: 2rem;
  height: 2rem;
}

.skeleton-avatar-lg {
  width: 3.5rem;
  height: 3.5rem;
}

.skeleton-avatar-xl {
  width: 5rem;
  height: 5rem;
}

/* Skeleton Button */
.skeleton-btn {
  width: 6rem;
  height: 2.5rem;
}

.skeleton-btn-sm {
  width: 5rem;
  height: 2rem;
}

.skeleton-btn-lg {
  width: 8rem;
  height: 3rem;
}

/* Skeleton Image */
.skeleton-image {
  width: 100%;
  aspect-ratio: 16 / 9;
}

.skeleton-image-square {
  aspect-ratio: 1 / 1;
}

.skeleton-image-portrait {
  aspect-ratio: 3 / 4;
}

/* Common Skeleton Patterns */

/* Card Skeleton */
.skeleton-card {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  background-color: var(--j-bg);
  border: 1px solid var(--j-border);
  border-radius: var(--j-radius-lg, 0.75rem);
}

.skeleton-card-image {
  width: 100%;
  height: 10rem;
  border-radius: var(--j-radius-default, 0.5rem);
}

.skeleton-card-content {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

/* List Item Skeleton */
.skeleton-list-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem 0;
}

.skeleton-list-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
}

/* Table Row Skeleton */
.skeleton-table-row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  padding: 1rem;
  border-bottom: 1px solid var(--j-border);
}

.skeleton-table-cell {
  height: 1rem;
}

/* Article Skeleton */
.skeleton-article {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.skeleton-article-header {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.skeleton-article-title {
  height: 2rem;
  width: 80%;
}

.skeleton-article-meta {
  display: flex;
  gap: 1rem;
}

.skeleton-article-body {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

/* Profile Skeleton */
.skeleton-profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 2rem;
}

.skeleton-profile-avatar {
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
}

.skeleton-profile-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
}

.skeleton-profile-name {
  height: 1.5rem;
  width: 50%;
}

.skeleton-profile-bio {
  height: 1rem;
  width: 80%;
}

/* Comment Skeleton */
.skeleton-comment {
  display: flex;
  gap: 1rem;
  padding: 1rem 0;
}

.skeleton-comment-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.skeleton-comment-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.skeleton-comment-name {
  height: 0.875rem;
  width: 8rem;
}

.skeleton-comment-time {
  height: 0.75rem;
  width: 4rem;
}

.skeleton-comment-body {
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
}

/* Dashboard Widget Skeleton */
.skeleton-widget {
  padding: 1.5rem;
  background-color: var(--j-bg);
  border: 1px solid var(--j-border);
  border-radius: var(--j-radius-lg, 0.75rem);
}

.skeleton-widget-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.skeleton-widget-title {
  height: 1.25rem;
  width: 40%;
}

.skeleton-widget-action {
  height: 1rem;
  width: 4rem;
}

.skeleton-widget-value {
  height: 2.5rem;
  width: 60%;
  margin-bottom: 0.5rem;
}

.skeleton-widget-change {
  height: 1rem;
  width: 30%;
}

/* Navigation Skeleton */
.skeleton-nav {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid var(--j-border);
}

.skeleton-nav-logo {
  width: 2rem;
  height: 2rem;
  border-radius: var(--j-radius-default, 0.5rem);
}

.skeleton-nav-links {
  display: flex;
  gap: 1.5rem;
  flex: 1;
}

.skeleton-nav-link {
  height: 1rem;
  width: 4rem;
}

/* Form Skeleton */
.skeleton-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.skeleton-form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.skeleton-form-label {
  height: 0.875rem;
  width: 30%;
}

.skeleton-form-input {
  height: 2.5rem;
  width: 100%;
}
`;
}
