use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn add_two(a: i32, b: i32) -> i32 {
    return a + b;
}
