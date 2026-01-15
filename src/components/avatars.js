export function generateAvatarStyles(config) {
  return `/* Avatar Base */
.avatar {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background-color: var(--j-bg-muted);
  color: var(--j-text);
  font-size: 1rem;
  font-weight: 500;
  overflow: hidden;
  flex-shrink: 0;
}

.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Avatar Sizes */
.avatar-xs {
  width: 1.5rem;
  height: 1.5rem;
  font-size: 0.625rem;
}

.avatar-sm {
  width: 2rem;
  height: 2rem;
  font-size: 0.75rem;
}

.avatar-md {
  width: 2.5rem;
  height: 2.5rem;
  font-size: 1rem;
}

.avatar-lg {
  width: 3.5rem;
  height: 3.5rem;
  font-size: 1.25rem;
}

.avatar-xl {
  width: 5rem;
  height: 5rem;
  font-size: 1.75rem;
}

.avatar-2xl {
  width: 6rem;
  height: 6rem;
  font-size: 2rem;
}

/* Avatar Shapes */
.avatar-square {
  border-radius: var(--j-radius-default, 0.5rem);
}

.avatar-rounded {
  border-radius: var(--j-radius-lg, 0.75rem);
}

/* Avatar with Border */
.avatar-bordered {
  border: 2px solid var(--j-bg);
  box-shadow: 0 0 0 2px var(--j-border);
}

.avatar-bordered-primary {
  box-shadow: 0 0 0 2px var(--j-primary);
}

.avatar-bordered-secondary {
  box-shadow: 0 0 0 2px var(--j-secondary);
}

.avatar-bordered-success {
  box-shadow: 0 0 0 2px var(--j-success);
}

/* Avatar Colors */
.avatar-primary {
  background-color: var(--j-primary);
  color: white;
}

.avatar-secondary {
  background-color: var(--j-secondary);
  color: white;
}

.avatar-accent {
  background-color: var(--j-accent);
  color: white;
}

.avatar-success {
  background-color: var(--j-success);
  color: white;
}

.avatar-warning {
  background-color: var(--j-warning);
  color: white;
}

.avatar-error {
  background-color: var(--j-error);
  color: white;
}

/* Avatar Soft Colors */
.avatar-soft-primary {
  background-color: color-mix(in srgb, var(--j-primary) 15%, transparent);
  color: var(--j-primary);
}

.avatar-soft-secondary {
  background-color: color-mix(in srgb, var(--j-secondary) 15%, transparent);
  color: var(--j-secondary);
}

.avatar-soft-success {
  background-color: color-mix(in srgb, var(--j-success) 15%, transparent);
  color: var(--j-success);
}

.avatar-soft-error {
  background-color: color-mix(in srgb, var(--j-error) 15%, transparent);
  color: var(--j-error);
}

/* Avatar with Status Indicator */
.avatar-with-status {
  position: relative;
}

.avatar-status {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
  border: 2px solid var(--j-bg);
  background-color: var(--j-text-muted);
}

.avatar-status-online {
  background-color: var(--j-success);
}

.avatar-status-offline {
  background-color: var(--j-text-muted);
}

.avatar-status-busy {
  background-color: var(--j-error);
}

.avatar-status-away {
  background-color: var(--j-warning);
}

/* Avatar Sizes - Status Indicator Adjustments */
.avatar-xs .avatar-status {
  width: 0.5rem;
  height: 0.5rem;
  border-width: 1px;
}

.avatar-sm .avatar-status {
  width: 0.625rem;
  height: 0.625rem;
  border-width: 1.5px;
}

.avatar-lg .avatar-status,
.avatar-xl .avatar-status,
.avatar-2xl .avatar-status {
  width: 1rem;
  height: 1rem;
  border-width: 2px;
}

/* Avatar with Badge */
.avatar-with-badge {
  position: relative;
}

.avatar-badge {
  position: absolute;
  top: -0.25rem;
  right: -0.25rem;
}

/* Avatar Group */
.avatar-group {
  display: flex;
  flex-direction: row-reverse;
}

.avatar-group .avatar {
  margin-left: -0.75rem;
  border: 2px solid var(--j-bg);
  transition: transform 200ms ease-in-out, z-index 200ms ease-in-out;
}

.avatar-group .avatar:last-child {
  margin-left: 0;
}

.avatar-group .avatar:hover {
  transform: translateY(-2px);
  z-index: 1;
}

/* Avatar Group Sizes */
.avatar-group-sm .avatar {
  width: 2rem;
  height: 2rem;
  margin-left: -0.5rem;
}

.avatar-group-lg .avatar {
  width: 3.5rem;
  height: 3.5rem;
  margin-left: -1rem;
}

/* Avatar Group with Count */
.avatar-group-count {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background-color: var(--j-bg-muted);
  color: var(--j-text-subtle);
  font-size: 0.75rem;
  font-weight: 600;
  margin-left: -0.75rem;
  border: 2px solid var(--j-bg);
}

/* Avatar Stack (Vertical) */
.avatar-stack {
  display: flex;
  flex-direction: column;
}

.avatar-stack .avatar {
  margin-top: -0.75rem;
  border: 2px solid var(--j-bg);
}

.avatar-stack .avatar:first-child {
  margin-top: 0;
}

/* Avatar with Text */
.avatar-with-text {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.avatar-text-content {
  display: flex;
  flex-direction: column;
}

.avatar-name {
  font-weight: 500;
  color: var(--j-text);
  line-height: 1.25;
}

.avatar-subtitle {
  font-size: 0.8125rem;
  color: var(--j-text-subtle);
  line-height: 1.25;
}

/* Avatar Placeholder */
.avatar-placeholder {
  background-color: var(--j-bg-muted);
  color: var(--j-text-muted);
}

.avatar-placeholder svg {
  width: 60%;
  height: 60%;
}

/* Avatar Glow (Futuristic) */
.avatar-glow {
  box-shadow: 0 0 20px color-mix(in srgb, var(--j-primary) 50%, transparent);
}

.avatar-glow-primary {
  box-shadow: 0 0 20px color-mix(in srgb, var(--j-primary) 60%, transparent);
}

.avatar-glow-secondary {
  box-shadow: 0 0 20px color-mix(in srgb, var(--j-secondary) 60%, transparent);
}

/* Avatar Gradient Border */
.avatar-gradient-border {
  padding: 2px;
  background: linear-gradient(135deg, var(--j-primary), var(--j-secondary));
  border-radius: 50%;
}

.avatar-gradient-border .avatar {
  width: 100%;
  height: 100%;
  border: 2px solid var(--j-bg);
}
`;
}
