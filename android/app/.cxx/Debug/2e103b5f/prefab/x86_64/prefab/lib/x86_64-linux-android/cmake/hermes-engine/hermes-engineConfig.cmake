if(NOT TARGET hermes-engine::libhermes)
add_library(hermes-engine::libhermes SHARED IMPORTED)
set_target_properties(hermes-engine::libhermes PROPERTIES
    IMPORTED_LOCATION "C:/Users/sande/.gradle/caches/8.12/transforms/023dbb0eb76f38af038fe321d6756fa9/transformed/jetified-hermes-android-0.78.0-debug/prefab/modules/libhermes/libs/android.x86_64/libhermes.so"
    INTERFACE_INCLUDE_DIRECTORIES "C:/Users/sande/.gradle/caches/8.12/transforms/023dbb0eb76f38af038fe321d6756fa9/transformed/jetified-hermes-android-0.78.0-debug/prefab/modules/libhermes/include"
    INTERFACE_LINK_LIBRARIES ""
)
endif()

