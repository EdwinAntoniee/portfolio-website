import { describe, expect, it } from "vitest"

import { decodeEmail } from "./string"

describe("decodeEmail", () => {
  it("decodes a base64-encoded email address", () => {
    expect(decodeEmail("ZWR3aW4ueHcyM0BnbWFpbC5jb20=")).toBe(
      "edwin.xw23@gmail.com"
    )
  })

  it("decodes the value stored in the USER data", () => {
    expect(decodeEmail("ZWR3aW4ueHcyM0BnbWFpbC5jb20=")).toContain("@gmail.com")
  })
})
