"use client";

/**
 * Premium Wedding Sound Effects (SFX) Engine
 * Powered by Web Audio API for zero-latency, offline-resilient, and organic sound design.
 */

class SoundEngine {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = false;

  private getContext(): AudioContext | null {
    if (typeof window === "undefined") return null;
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume().catch(() => {});
    }
    return this.ctx;
  }

  public setMuted(muted: boolean) {
    this.isMuted = muted;
  }

  public getIsMuted(): boolean {
    return this.isMuted;
  }

  /**
   * 1. WAX SEAL BREAK & ENVELOPE UNFOLD
   * Simulates the organic snap of breaking sealing wax followed by a silky paper rustle.
   */
  public playWaxBreak() {
    if (this.isMuted) return;
    const ctx = this.getContext();
    if (!ctx) return;

    const now = ctx.currentTime;

    // --- A. Wax Snap (Crisp transient pop) ---
    const snapOsc = ctx.createOscillator();
    const snapGain = ctx.createGain();
    const snapFilter = ctx.createBiquadFilter();

    snapOsc.type = "triangle";
    snapOsc.frequency.setValueAtTime(320, now);
    snapOsc.frequency.exponentialRampToValueAtTime(80, now + 0.08);

    snapFilter.type = "lowpass";
    snapFilter.frequency.setValueAtTime(1800, now);

    snapGain.gain.setValueAtTime(0.45, now);
    snapGain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);

    snapOsc.connect(snapFilter);
    snapFilter.connect(snapGain);
    snapGain.connect(ctx.destination);

    snapOsc.start(now);
    snapOsc.stop(now + 0.1);

    // --- B. Paper Rustle & Unfold Whoosh (Filtered pink noise) ---
    const bufferSize = ctx.sampleRate * 0.45;
    const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    let lastOut = 0.0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      output[i] = (lastOut + 0.02 * white) / 1.02; // Pink noise filter
      lastOut = output[i];
      output[i] *= 3.5;
    }

    const noiseSource = ctx.createBufferSource();
    noiseSource.buffer = noiseBuffer;

    const noiseFilter = ctx.createBiquadFilter();
    noiseFilter.type = "bandpass";
    noiseFilter.frequency.setValueAtTime(800, now + 0.04);
    noiseFilter.frequency.exponentialRampToValueAtTime(2200, now + 0.35);
    noiseFilter.Q.setValueAtTime(1.8, now);

    const noiseGain = ctx.createGain();
    noiseGain.gain.setValueAtTime(0.001, now);
    noiseGain.gain.linearRampToValueAtTime(0.25, now + 0.08);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.42);

    noiseSource.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(ctx.destination);

    noiseSource.start(now + 0.02);
    noiseSource.stop(now + 0.45);

    // --- C. Resonant Glass / Bell shimmer tone ---
    this.playTone(880, "sine", 0.15, now + 0.1, 0.4);
    this.playTone(1320, "sine", 0.08, now + 0.18, 0.5);
  }

  /**
   * 2. CRYSTALLINE CHIME (For interactive clicks, copy account, photo lightbox)
   * Warm, luxurious bell harmonic chime.
   */
  public playChime() {
    if (this.isMuted) return;
    const ctx = this.getContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    // Harmonic frequencies (E5 and B5)
    this.playTone(659.25, "sine", 0.22, now, 0.45);
    this.playTone(987.77, "sine", 0.15, now + 0.05, 0.6);
    this.playTone(1318.51, "sine", 0.08, now + 0.1, 0.7);
  }

  /**
   * 3. CELEBRATION HARP ARPEGGIO (For RSVP confirmation & congratulations)
   * Ascending romantic harp arpeggio with golden resonance.
   */
  public playCelebrationHarp() {
    if (this.isMuted) return;
    const ctx = this.getContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    // C Major 9 Romantic chord: C5, E5, G5, B5, C6, E6
    const notes = [523.25, 659.25, 783.99, 987.77, 1046.5, 1318.51];

    notes.forEach((freq, idx) => {
      const time = now + idx * 0.075;
      this.playTone(freq, "triangle", 0.2, time, 0.85);
      // Soft high sparkle overtone
      this.playTone(freq * 2, "sine", 0.06, time + 0.02, 0.5);
    });
  }

  /**
   * 4. GENTLE TACTILE CLICK / PAPER TAP (For selection pills and tabs)
   */
  public playTap() {
    if (this.isMuted) return;
    const ctx = this.getContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(440, now);
    osc.frequency.exponentialRampToValueAtTime(140, now + 0.04);

    gain.gain.setValueAtTime(0.12, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.04);
  }

  private playTone(freq: number, type: OscillatorType, volume: number, startTime: number, duration: number) {
    const ctx = this.getContext();
    if (!ctx) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, startTime);

    gain.gain.setValueAtTime(volume, startTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(startTime);
    osc.stop(startTime + duration);
  }
}

export const sfx = new SoundEngine();

